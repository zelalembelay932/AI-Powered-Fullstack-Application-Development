import { ArrowUp, Mic, Plus } from 'lucide-react'
import style from './ChatInput.module.css'
import { useState } from 'react'

const ChatInput = ({handleSubmit}) => {
    const [input, setInput] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        handleSubmit(input);
        setInput('')
    }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.icon}>
          <Plus size={20} />
        </div>

        <input
          type="text"
          className={style.input}
          placeholder="Ask anything"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // disabled={isLoading}
        />
        {input?.trim() ? (
          <button type="submit" className={style.submitBtn}>
            <ArrowUp size={18} />
          </button>
        ) : (
          <button type="submit" className={style.submitBtn}>
            <Mic size={20} />
          </button>
        )}
      </form>
    </div>
  );
}

export default ChatInput
