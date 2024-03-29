import React from 'react'


function Main(
    {
        reset, status, game, player1Click, player2Click,
        box1, box2, box3, box4, box5, box6, box7, box8, box9,
        setBox1, setBox2, setBox3, setBox4, setBox5, setBox6, setBox7, setBox8, setBox9, setStatus, setGame
    }
) {
    return (
        <div>
            <div className='container'>
                <div className='row'>


                    {/* 3x3 Boxes Start */}
                    <div className='col-10 col-sm-10 col-md-8 col-lg-12 mt-5 game text-center '>
                        <div className='mt-5 col box'>
                            <button
                                className={
                                    (box1 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box1 === "X" && box2 === "X" && box3 === "X") || 
                                    (box1 === "O" && box2 === "O" && box3 === "O") ||
                                    (box1 === "X" && box4 === "X" && box7 === "X") ||
                                    (box1 === "O" && box4 === "O" && box7 === "O") ||
                                    (box1 === "X" && box5 === "X" && box9 === "X") ||
                                    (box1 === "O" && box5 === "O" && box9 === "O") ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box1 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }

                                // onClick={
                                //     game === "" ? () => alert("Choose Your PLAYER !") : () => setBox1(game)
                                // }
                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox1(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box1}
                            </button>

                            <button
                                className={
                                    (box2 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box1 === "X" && box2 === "X" && box3 === "X") || 
                                    (box1 === "O" && box2 === "O" && box3 === "O") ||
                                    (box2 === "X" && box5 === "X" && box8 === "X") ||
                                    (box2 === "O" && box5 === "O" && box8 === "O") ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box2 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }

                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox2(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box2}
                            </button>

                            <button
                                className={
                                    (box3 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box1 === "X" && box2 === "X" && box3 === "X") || 
                                    (box1 === "O" && box2 === "O" && box3 === "O") ||
                                    (box3 === "X" && box6 === "X" && box9 === "X") ||
                                    (box3 === "O" && box6 === "O" && box9 === "O") ||
                                    (box3 === "X" && box5 === "X" && box7 === "X") ||
                                    (box3 === "O" && box5 === "O" && box7 === "O") ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box3 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }
                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox3(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box3}
                            </button>
                        </div>

                        <div className='mt-5 col box'>
                            <button
                                className={
                                    (box4 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box4 === "X" && box5 === "X" && box6 === "X") || 
                                    (box4 === "O" && box5 === "O" && box6 === "O") ||
                                    (box1 === "X" && box4 === "X" && box7 === "X") ||
                                    (box1 === "O" && box4 === "O" && box7 === "O") ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box4 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }

                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox4(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box4}
                            </button>

                            <button
                                className={
                                    (box5 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box4 === "X" && box5 === "X" && box6 === "X") || 
                                    (box4 === "O" && box5 === "O" && box6 === "O") ||
                                    (box2 === "X" && box5 === "X" && box8 === "X") ||
                                    (box2 === "O" && box5 === "O" && box8 === "O") ||
                                    (box1 === "X" && box5 === "X" && box9 === "X") ||
                                    (box1 === "O" && box5 === "O" && box9 === "O") ||
                                    (box3 === "X" && box5 === "X" && box7 === "X") ||
                                    (box3 === "O" && box5 === "O" && box7 === "O") ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box5 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }
                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox5(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box5}
                            </button>

                            <button
                                className={
                                    (box6 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box4 === "X" && box5 === "X" && box6 === "X") || 
                                    (box4 === "O" && box5 === "O" && box6 === "O") ||
                                    (box3 === "X" && box6 === "X" && box9 === "X") ||
                                    (box3 === "O" && box6 === "O" && box9 === "O")  ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box6 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }

                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox6(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box6}
                            </button>
                        </div>

                        <div className='mt-5 mb-5 col box'>
                            <button
                                className={
                                    (box7 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box7 === "X" && box8 === "X" && box9 === "X") || 
                                    (box7 === "O" && box8 === "O" && box9 === "O") ||
                                    (box1 === "X" && box4 === "X" && box7 === "X") ||
                                    (box1 === "O" && box4 === "O" && box7 === "O") ||
                                    (box3 === "X" && box5 === "X" && box7 === "X") ||
                                    (box3 === "O" && box5 === "O" && box7 === "O") ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box7 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }

                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox7(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box7}
                            </button>

                            <button
                                className={
                                    (box8 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box7 === "X" && box8 === "X" && box9 === "X") || 
                                    (box7 === "O" && box8 === "O" && box9 === "O") ||
                                    (box2 === "X" && box5 === "X" && box8 === "X") ||
                                    (box2 === "O" && box5 === "O" && box8 === "O") ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box8 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }

                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox8(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box8}
                            </button>

                            <button
                                className={
                                    (box9 === "X" ?
                                        'btn border border-dark text-primary fs-3' :
                                        'btn border border-dark text-success fs-3') &&
                                    (
                                    (box7 === "X" && box8 === "X" && box9 === "X") || 
                                    (box7 === "O" && box8 === "O" && box9 === "O") ||
                                    (box3 === "X" && box6 === "X" && box9 === "X") ||
                                    (box3 === "O" && box6 === "O" && box9 === "O") ||
                                    (box1 === "X" && box5 === "X" && box9 === "X") ||
                                    (box1 === "O" && box5 === "O" && box9 === "O") ?
                                        'btn border border-dark btn-danger text-white fs-3' : 
                                    box9 === "X" ? 'btn border border-dark text-primary fs-3' :
                                            'btn border border-dark text-success fs-3')
                                }

                                onClick={
                                    game === "" ? () => alert("Choose Your PLAYER !") : 
                                    () => setBox9(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) : 
                                    game && (setStatus("Player1") ^ setGame("X"))
                                }
                            >
                                {box9}
                            </button>
                        </div>
                    </div>
                    {/* 3x3 Boxes Finish */}

                    {/* Player Buttons Start  */}
                    <div className='col-6 ms-auto me-auto col-lg-2 mt-5'>
                        <h2 style={{ whiteSpace: "nowrap", float: "right" }} className="fs-3 mb-3">Choose Your PLAYER!</h2>
                        {
                            status == "" &&
                            <>
                                <button
                                    className='btn btn-primary players'
                                    style={{ width: "60%", height: "10%", fontSize: "20px" }}
                                    onClick={player1Click}>
                                    Player 1
                                </button>

                                <button
                                    className='btn btn-success players mt-3'
                                    style={{ width: "60%", height: "10%", fontSize: "20px" }}
                                    onClick={player2Click}>
                                    Player 2
                                </button>
                            </>
                        }

                        {
                            status == "Player1" &&
                            <>
                                <button
                                    className='btn btn-primary players'
                                    onClick={player1Click}>
                                    Player 1
                                </button>

                                <button
                                    className='btn btn-success players mt-3'
                                    style={{ width: "60%", height: "10%", fontSize: "20px" }}
                                    onClick={player2Click}>
                                    Player 2
                                </button>
                            </>
                        }

                        {
                            status == "Player2" &&
                            <>
                                <button
                                    className='btn btn-primary players'
                                    style={{ width: "60%", height: "10%", fontSize: "20px" }}
                                    onClick={player1Click}>
                                    Player 1
                                </button>

                                <button
                                    className='btn btn-success players mt-3'
                                    onClick={player2Click}>
                                    Player 2
                                </button>
                            </>
                        }

                        <div 
                        className="player-status mb-3"
                        >
                            Player Status: {
                            game === "X" ? <span className='text-primary'> X</span> : 
                            game === "O" ?  <span className='text-success'> O</span> : 
                            <span className='fs-6 text-danger text-opacity-50'> None</span>} 
                        </div>

                        <button
                            className=' btn btn-warning players'
                            style={{ marginTop: "40%", marginBottom:"50%" }}
                            onClick={reset}>
                            Play Again
                        </button>

                    </div>
                    {/* Player Buttons Finish  */}

                </div>
            </div>
        </div>
    )
}

export default Main;