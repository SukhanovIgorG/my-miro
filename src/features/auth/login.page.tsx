import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/model/routes';

function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-1 rounded-2xl p-4 w-fit">
        Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
      </div>
    </div>
  );
}

export const Component = LoginPage;
