using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LearnNest_Backend.Migrations
{
    /// <inheritdoc />
    public partial class updatedmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NestsT",
                columns: table => new
                {
                    NestId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NestName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NestLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NestDescription = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NestsT", x => x.NestId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NestsT");
        }
    }
}
