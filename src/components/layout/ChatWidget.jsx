import { useState } from 'react';
import Icon from '../ui/Icon';
function Chat() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-card">
          <div className="chat-head">
            <span>EDM Lead Network</span>
            <button aria-label="Close chat" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <p>Hi there, have a question? Text us here.</p>
          {sent ? (
            <p className="chat-reply">
              Thanks! This demo chat is local and isn’t connected to an agent.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="sr-only" htmlFor="chat-message">
                Your message
              </label>
              <input
                id="chat-message"
                placeholder="Type a message..."
                required
              />
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      )}
      <button
        className="chat-trigger"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? "close" : "chat"} size={24} />
      </button>
    </div>
  );
}

export { Chat };
