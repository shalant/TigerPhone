﻿namespace TigerBackEnd5.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Plan> Plans { get; set; }
    }
}
