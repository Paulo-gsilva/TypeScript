//STRUCTURAL TYPE - o structural type apenas verifica se o conteúdo está sendo seguido

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
}

const dataUser = { username: 'João', password: '12345' };
const sentUser = { username: 'João', idade: 42, password: '12345' };
//irá funcionar de toda forma, pois as constantes respeitam a estrutura do Type User
const login = verifyUser(dataUser, sentUser);
console.log(login);


