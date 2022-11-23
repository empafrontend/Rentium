import { Button, Container, TextField } from '@mui/material';

function NewAdPage() {
  return (
    <Container className="h-full flex-col">
      <div>
        <div>
          <header className="h-1/4">
            <h1>Rentium</h1>
          </header>
        </div>
        <div>
          <Button variant="contained">Upload</Button>
        </div>
        <div className="flex justify-center flex-col">
          <span>Kategori</span>
          <TextField id="outlined-basic" variant="outlined" />
        </div>
        <div className="flex justify-center flex-col">
          <span>Rubrik</span>
          <TextField id="outlined-basic" variant="outlined" />
        </div>
        <div className="flex justify-center flex-col">
          <span>Beskrivning av varan</span>
          <TextField id="outlined-basic" variant="outlined" />
        </div>
        <div className="flex justify-center flex-col">
          <span>Pris</span>
          <TextField id="outlined-basic" variant="outlined" />
        </div>
        <div className="flex justify-center flex-col">
          <span>Plats</span>
          <TextField id="outlined-basic" variant="outlined" />
        </div>
        <div className="flex justify-center">
          <div>
            <Button variant="contained">Lägg upp</Button>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <div>
            <Button variant="contained">Hem</Button>
          </div>
          <div>
            <Button variant="contained">Annonser</Button>
          </div>
          <div>
            <Button variant="contained">Lägg till</Button>
          </div>
          <div>
            <Button variant="contained">Logga ut</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NewAdPage;
