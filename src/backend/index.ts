import * as path from 'path';
import * as express from 'express'; 

const PORT = process.env.PORT || 8081;
const app = express();

// app.use(express.static(path.join(__dirname, '../frontend')));
app.use((req, res) => res.send('ok'));
app.listen(PORT, () => console.log(`Backend is started at ${PORT}`));
