using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using CorujasDev.Vibbra.Coworking.Application.Interfaces;
using CorujasDev.Vibbra.Coworking.Application.Services;
using CorujasDev.Vibbra.Coworking.Core;
using CorujasDev.Vibbra.Coworking.Domain.Interfaces;
using CorujasDev.Vibbra.Coworking.Domain.Models;
using CorujasDev.Vibbra.Coworking.Infra.Data.Context;
using CorujasDev.Vibbra.Coworking.Infra.Data.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace CorujasDev.Vibbra.Coworking.Application.Setup
{
    public static class DependencyInjection
    {
        public static void RegisterServices(this IServiceCollection services)
        {

            // Catalogo
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IPlaceRepository, PlaceRepository>();
            services.AddScoped<IProfessionalRepository, ProfessionalRepository>();
            services.AddScoped<IReserveRepository, ReserveRepository>();

            services.AddScoped(typeof(IRepository<User>), typeof(UserRepository));
            services.AddScoped(typeof(IRepository<Place>), typeof(PlaceRepository));

            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IPlaceService, PlaceService>();
            services.AddScoped<IUserService, UserService>();

            services.AddScoped<CoworkingContext>();
        }
    }
}
