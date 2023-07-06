import { useEffect, useState } from "react"

export default function MinhasTarefas() {
    const [tarefa, setTarefa] = useState('')
    const [tarefas, setTarefas] = useState(['Lavar o carro', 'Dar agua para as plantas'])

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefas')

        if (tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])


    useEffect(()=>{
        localStorage.setItem('@tarefas', JSON.stringify(tarefas))

    }, [tarefas])

    function adicionarTarefa(e) {
        e.preventDefault()

        setTarefas([...tarefas, tarefa])

        setTarefa('')
    }

    return (
        <div>
            <h1>Minhas Tarefas</h1>

            <form onSubmit={adicionarTarefa}>
                <label>Nome da Tarefa:</label><br />
                <input
                    placeholder="Digite a tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                /><br />
                <button type="submit">Adicionar</button>
            </form>

            <br /><br />

            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
        </div>
    )
}