namespace BitChat.Infrastructure.Domain
{
    public class User
    {
        public User()
        {
            Chats = new HashSet<Chat>();
        }

        public long Id { get; set; }
        public string ApplicationName { get; set; }
        public long AppUserId { get; set; }
        public DateTime InsertDateTime { get; set; }
        public DateTime? ModifiedDateTime { get; set; }

        public ICollection<Chat> Chats { get; set; }
    }
}
