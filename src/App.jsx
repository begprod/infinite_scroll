import { useState, useEffect, createRef, useRef } from 'react';
import { getUsers } from './services/userService.js';
import { DefaultLayout, UserCard, Counter, Spinner } from './components';

function App() {
  const [users, setUsers] = useState({ data: [], page: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setIsLoading(true);

    getUsers(users.data.page)
      .then((response) => {
        setUsers({
          data: [...users.data, ...response.data.results],
          page: users.page + 1,
        });

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchUsers();

    return () => {
      setUsers({ data: [], page: 1 });
      setIsLoading(false);
      setError(null);
    }
  }, [])

  const element = createRef();
  const observerLoader = useRef();

  const elementInSightAction = (entries) => {
    if (entries[0].isIntersecting && !isLoading) {
      fetchUsers();
    }
  };

  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(elementInSightAction);

    if (element.current) {
      observerLoader.current.observe(element.current);
    }
  }, [element]);

  const renderUsers = () => {
    return users.data.map((user, index) => {
      if (index + 1 === users.data.length) {
        return (
          <UserCard
            key={user.login.uuid}
            image={user.picture.medium}
            name={user.name}
            email={user.email}
            ref={element}
          />
        )
      }

      return (
        <UserCard
          key={user.login.uuid}
          image={user.picture.medium}
          email={user.email}
          name={user.name}
        />
      )
    })
  }

  return (
    <>
      <DefaultLayout>
        <div className="relative container mx-auto pt-24 px-5">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {renderUsers()}
          </div>

          {isLoading && <Spinner />}
          {error && <p className="text-center text-xl">Error: {error.message}</p>}
        </div>
        <Counter
          currentPage={users.page - 1}
          total={users.data.length}
        />
      </DefaultLayout>
    </>
  )
}

export default App;
