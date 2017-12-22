import * as path from 'path';
import * as express from 'express'; 

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, '../frontend')));
app.listen(PORT, () => console.log(`Backend is started at ${PORT}`));
