using BitChat.Infrastructure.Domain;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace BitChat.Infrastructure.Persistence
{
    public class DatabaseContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Chat> Chats { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DatabaseContext
            (DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly
               (Assembly.GetExecutingAssembly());

            #region QueryFilters
            #endregion
        }
    }
}
