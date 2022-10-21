﻿using TigerBackEnd5.Models.Profiles;

namespace TigerBackEnd5.Models
{
    public class Device
    {
        public int Id { get; set; }

        public int DeviceProfileId { get; set; }
        public virtual DeviceProfile Profile { get; set; }

        public int PhoneNumberId { get; set; }
        public virtual PhoneNumber PhoneNumber { get; set; }
    }
}
