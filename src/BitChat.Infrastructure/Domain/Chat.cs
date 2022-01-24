namespace BitChat.Infrastructure.Domain
{
    public class Chat
    {
        public Chat()
        {
            Messages = new HashSet<Message>();
        }

        public long Id { get; set; }
        public long FromUserId { get; set; }
        public long ToUserId { get; set; }
        public DateTime InsertDateTime { get; set; }

        public virtual User FromUser { get; set; }
        public virtual User ToUser { get; set; }
        public virtual ICollection<Message> Messages { get; set; }
    }
}
