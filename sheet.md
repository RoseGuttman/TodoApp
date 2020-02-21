# react syntax

- component syntax
```jsx
function App(){
    return <div> {//html elements}
        <Header /> {//custom elements}
        hellow world!
    </div>
}

```

- hooks
```jsx
function App(){
    const [text, setText] = useState ()''
    return <div> 
        <input value={text}
            onChange={setText(e.target.value)}
        />
    </div>
}

```

- useEffect hook
- and map
```jsx
function App(){
    const [messages, setMessages] = useState([])

    useEffect(async()=> {
        const msgs = await api.getMessages
        setMessages(msg)
    }, [])
    return <div> 
        {messages.map((m,i)=> {
            // return a component and pass props
            // inside message, each property of "m"
            // will be avaliable in props.x
            return <Messages key={i} {..m}>
        })}
    </div>
}

```