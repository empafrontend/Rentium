import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ContentContainer from './shared/ContentContainer';

const NotFound = () => {
  return (
    <ContentContainer>
      <div className="w-full flex justify-center align-center text-center tracking-widee">
        <div className="w-5/12">
          <h1 className="text-6xl mb-4">404</h1>
          <p className="text-2xl">Hoppsan, det ser ut som att du är vilse.</p>
          <p className="text-xl mb-4">Klicka här för att hitta hem igen:</p>
          <div className="flex justify-center text-xl">
            <Button variant="contained" type="submit">
              <Link className="text-xl p-8" to="/">
                Hem
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default NotFound;
