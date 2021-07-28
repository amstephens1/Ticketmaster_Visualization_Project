-- Creates the user "1" for SQL Server using the security credential "Public"   
-- The user login starts with the password "Events," but that password must be changed after the first login.  

-- Syntax for SQL Server
-- CREATE LOGIN login_name { WITH <option_list1> | FROM <sources> }

-- <option_list1> ::=
   -- PASSWORD = { 'password' | hashed_password HASHED } [ MUST_CHANGE ]
    --[ , <option_list2> [ ,... ] ]

--<option_list2> ::=
   -- SID = sid
    --| DEFAULT_DATABASE = database
    --| DEFAULT_LANGUAGE = language
    --| CHECK_EXPIRATION = { ON | OFF}
    --| CHECK_POLICY = { ON | OFF}
    --| CREDENTIAL = credential_name

--<sources> ::=
    WINDOWS [ WITH <windows_options>[ ,... ] ]
    | CERTIFICATE certname
    | ASYMMETRIC KEY asym_key_name

--<windows_options> ::=
    --DEFAULT_DATABASE = database
   -- | DEFAULT_LANGUAGE = language

using System;  
using System.Collections.Generic;  
using System.ComponentModel;  
using System.Data;  
using System.Drawing;  
using System.Linq;  
using System.Text;  
using System.Windows.Forms;  
using System.Data.Sql;  
using System.Data.OleDb;  
using System.Data.SqlClient;  
  
namespace login_form  
{  
    public partial class Form1 : Form  
    {  
        SqlConnection con = new SqlConnection();  
        public Form1()  
        {  
            SqlConnection con = new SqlConnection();  
            con.ConnectionString = "Data Source=https://app.ticketmaster.com/discovery/v2/events.json?apikey=ZmIEawYVUQbeMEzMytkLVXUFjgNy3YqT&size=200&stateCode=MN";  
  
            InitializeComponent();  
        }  
  
        private void Form1_Load(object sender, EventArgs e)  
        {  
            // TODO: This line of code loads data into the 'DataSet.login' table. You can move, or remove it, as needed.  
            //this.loginTableAdapter.Fill(this.sTUDENTDataSet.login);  
            SqlConnection con = new SqlConnection("Data Source=https://app.ticketmaster.com/discovery/v2/events.json?apikey=ZmIEawYVUQbeMEzMytkLVXUFjgNy3YqT&size=200&stateCode=MN");  
            con.Open();  
  
            {  
            }  
        }  
  
        private void button1_Click(object sender, EventArgs e)  
        {  
            SqlConnection con = new SqlConnection();  
            con.ConnectionString = "Data Source=https://app.ticketmaster.com/discovery/v2/events.json?apikey=ZmIEawYVUQbeMEzMytkLVXUFjgNy3YqT&size=200&stateCode=MN";  
            con.Open();  
            string userid = textBox1.Text;  
            string password = textBox2.Text;  
            SqlCommand cmd = new SqlCommand("select userid,password from login where userid='" + textBox1.Text + "'and password='" + text            Box2.Text + "'", con);  
            SqlDataAdapter da = new SqlDataAdapter(cmd);  
            DataTable dt = new DataTable();  
            da.Fill(dt);  
            if (dt.Rows.Count > 0)  
            {  
                MessageBox.Show("Login sucess Welcome to Homepage http://127.0.0.1:5501/index.html");  
                System.Diagnostics.Process.Start("http://127.0.0.1:5501/index.html");  
            }  
            else  
            {  
                MessageBox.Show("Invalid Login please check username and password");  
            }  
            con.Close();  
        }  
  
        private void button2_Click(object sender, EventArgs e)  
        {  
            Application.Exit();  
  
        }  
    }  
}  




