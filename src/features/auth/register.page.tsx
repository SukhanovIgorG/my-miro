import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/model/routes';

function RegisterPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-1 rounded-2xl p-4 w-fit">
        Уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
      </div>
    </div>
  );
}

export const Component = RegisterPage;
