using System.Collections.Generic;
using System.Linq;
using CorujasDev.Vibbra.Coworking.Domain.Interfaces;
using CorujasDev.Vibbra.Coworking.Domain.Models;
using CorujasDev.Vibbra.Coworking.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        

        public UserRepository(CoworkingContext context) : base(context)
        {
            
        }

        public User Login(string email, string password)
        {
            return base._context.Users.FirstOrDefault(x => x.Email == email && x.Password == password);
        }

        public override IEnumerable<User> GetAll()
        {
            return base._context.Users.Include(x => x.Professional).ToList();
        }
    }
}
