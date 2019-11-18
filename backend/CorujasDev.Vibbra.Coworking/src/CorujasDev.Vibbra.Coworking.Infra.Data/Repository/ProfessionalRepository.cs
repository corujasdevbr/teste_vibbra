using CorujasDev.Vibbra.Coworking.Domain.Interfaces;
using CorujasDev.Vibbra.Coworking.Domain.Models;
using CorujasDev.Vibbra.Coworking.Infra.Data.Context;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Repository
{
    public class ProfessionalRepository : Repository<Professional>, IProfessionalRepository
    {
        public ProfessionalRepository(CoworkingContext context) : base(context)
        {
        }
    }
}
