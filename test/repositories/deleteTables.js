import connection from '../../src/dbConfig';

const deleteTables = () => connection.query('delete from restaurants;');

export default deleteTables;
