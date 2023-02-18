using Npgsql;

namespace chat_net.services.SQL.FileHandler
{
    public class FileService
    {

        public static bool SaveFile(SQLFile file)
        {
            try
            {

                
                string query = $@"INSERT INTO files (name, path, user_id) VALUES ('{file.Name}', '{file.Path}', {file.UserId})";

                var connection = SQLConnection.GetConnection();

                var cmd = new NpgsqlCommand(query, connection);

                cmd.ExecuteNonQuery();

                connection.Close();

                return true;
            }
            catch
            {
                return false;
            }
        }

    }
}
