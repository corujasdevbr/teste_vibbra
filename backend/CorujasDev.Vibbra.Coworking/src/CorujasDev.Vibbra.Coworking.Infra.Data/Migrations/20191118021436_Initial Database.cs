using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Migrations
{
    public partial class InitialDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateUpdate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(type: "VARCHAR(150)", nullable: false),
                    TypePlace = table.Column<int>(nullable: false),
                    Cep = table.Column<string>(type: "CHAR(9)", nullable: false),
                    Address = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    District = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    City = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    State = table.Column<string>(type: "CHAR(2)", nullable: false),
                    Image = table.Column<string>(type: "VARCHAR(350)", nullable: false),
                    NumberTables = table.Column<int>(type: "INT", nullable: false),
                    NumberChairs = table.Column<int>(type: "INT", nullable: false),
                    HourlyCost = table.Column<decimal>(type: "DECIMAL(17,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateUpdate = table.Column<DateTime>(nullable: false),
                    UserName = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    CompanyName = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    CNPJ = table.Column<string>(type: "VARCHAR(18)", nullable: true),
                    Email = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Password = table.Column<string>(type: "VARCHAR(20)", nullable: false),
                    TypeUser = table.Column<int>(type: "INT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Professionals",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateUpdate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    RG = table.Column<string>(type: "VARCHAR(15)", nullable: false),
                    CPF = table.Column<string>(type: "VARCHAR(14)", nullable: false),
                    Profession = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    Linkedin = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    Facebook = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    Twitter = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    CelPhone = table.Column<string>(type: "VARCHAR(18)", nullable: true),
                    Telephone = table.Column<string>(type: "VARCHAR(18)", nullable: true),
                    City = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    State = table.Column<string>(type: "CHAR(2)", nullable: true),
                    UserId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Professionals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Professionals_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reserves",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateUpdate = table.Column<DateTime>(nullable: false),
                    PlaceId = table.Column<Guid>(nullable: false),
                    ProfessionalId = table.Column<Guid>(nullable: false),
                    Date = table.Column<DateTime>(type: "DateTime2", nullable: false),
                    StartTime = table.Column<TimeSpan>(type: "BIGINT ", nullable: false),
                    Cost = table.Column<decimal>(type: "Decimal(17,2) ", nullable: false),
                    Flag = table.Column<bool>(type: "Bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reserves", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reserves_Locations_PlaceId",
                        column: x => x.PlaceId,
                        principalTable: "Locations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reserves_Professionals_ProfessionalId",
                        column: x => x.ProfessionalId,
                        principalTable: "Professionals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Professionals_UserId",
                table: "Professionals",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reserves_PlaceId",
                table: "Reserves",
                column: "PlaceId");

            migrationBuilder.CreateIndex(
                name: "IX_Reserves_ProfessionalId",
                table: "Reserves",
                column: "ProfessionalId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserName",
                table: "Users",
                column: "UserName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reserves");

            migrationBuilder.DropTable(
                name: "Locations");

            migrationBuilder.DropTable(
                name: "Professionals");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
