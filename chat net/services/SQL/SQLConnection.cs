using Npgsql;
using System.Diagnostics;

namespace chat_net.services.SQL
{
    public class SQLConnection
    {
        
        public static string ConnectionString { get; set; } = "User ID=postgres;Password=MW5GSP3jKzqxpqLKDEfM;Host=containers-us-west-143.railway.app;Port=7358;Database=chatdb;Pooling=true;";

        public static void ExecuteNonQueryStatement(string query)
        {
     

            using var conn = new NpgsqlConnection(ConnectionString);
            conn.Open();

            using var cmd = new NpgsqlCommand(query, conn);

            cmd.ExecuteNonQuery();


       



            conn.Close();
        }


        public static NpgsqlConnection GetConnection() {

            NpgsqlConnection conn = new NpgsqlConnection(ConnectionString);
            conn.Open();
            return conn;

        }

    }
}
