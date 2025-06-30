import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/shared/model/routes';
import { Button } from '@/shared/ui/kit/button';

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-1 rounded-2xl p-4 w-fit">
        Нет аккаунта?
        <Button onClick={() => navigate(ROUTES.REGISTER)} variant={'link'}>
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
}

export const Component = LoginPage;
