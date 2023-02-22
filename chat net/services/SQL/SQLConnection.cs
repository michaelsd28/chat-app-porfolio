using chat_net.models;
using Npgsql;
using System.Diagnostics;

namespace chat_net.services.SQL
{
    public class SQLConnection
    {
        static string localString = "User ID=michael;Password=2810;Host=localhost;Port=5432;Database=chatdb;Pooling=true;";
       static string railwayConnectionString = "User ID=postgres;Password=MW5GSP3jKzqxpqLKDEfM;Host=containers-us-west-143.railway.app;Port=7358;Database=chatdb;Pooling=true;";
        
        static string railwayConnectionString2 = "User ID = postgres; Password=tBbwpBrL40AoE9E08l2r;Host=containers-us-west-67.railway.app;Port=7622;Database=chatdb;Pooling=true;";

        


        public static string ConnectionString { get; set; } = railwayConnectionString2;



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
