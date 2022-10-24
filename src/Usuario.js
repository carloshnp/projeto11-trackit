import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [todayProgress, setTodayProgress] = useState(0);
  const [todayHabits, setTodayHabits] = useState([]);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({});
    }
  }, []);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const request = axios.get(URL, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    request
      .then((ans) => {
        setTodayHabits(ans.data);
        let total = 0;
        let completedHabits = 0;

        ans.data.forEach((habit) => {
          total++;
          habit.done && completedHabits++;
        });
        const percent = Math.round((completedHabits / total) * 100);
        setTodayProgress(percent);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [refresh]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        refresh,
        setRefresh,
        todayProgress,
        setTodayProgress,
        todayHabits,
        setTodayHabits,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext foi utilizado fora do Provider");
  }
  return context;
};

export { UserContext, UserContextProvider, useUserContext };
