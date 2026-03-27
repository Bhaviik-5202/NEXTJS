"use client";

import React, { useState, useEffect, useRef } from "react";

const GRID_SIZE = 20;
const TICK_RATE = 150;

type Point = { x: number; y: number };

export default function SnakeGamePage() {
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Point>({ x: 0, y: -1 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case "ArrowDown": if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case "ArrowLeft": if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case "ArrowRight": if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newHead = {
        x: (snake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
        y: (snake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
      };

      // Check self-collision
      if (snake.some(p => p.x === newHead.x && p.y === newHead.y)) {
        setGameOver(true);
        return;
      }

      const newSnake = [newHead, ...snake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(s => s + 10);
        setFood({
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        });
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const interval = setInterval(moveSnake, TICK_RATE);
    return () => clearInterval(interval);
  }, [snake, direction, food, gameOver]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#f3f4f6";
    ctx.fillRect(0, 0, 400, 400);

    // Draw snake
    ctx.fillStyle = "#10b981";
    snake.forEach(p => ctx.fillRect(p.x * 20, p.y * 20, 18, 18));

    // Draw food
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18);
  }, [snake, food]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 0, y: -1 });
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Lab 29: Snake game</h1>
      <div className="mb-4 text-xl font-mono">Score: {score}</div>
      <div className="relative border-4 border-gray-800 rounded bg-gray-100">
        <canvas ref={canvasRef} width={400} height={400} />
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4 text-red-500">GAME OVER</h2>
            <p className="mb-6 italic">Final Score: {score}</p>
            <button onClick={resetGame} className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200">Try Again</button>
          </div>
        )}
      </div>
      <p className="mt-4 text-gray-500">Use arrow keys to move the snake</p>
    </div>
  );
}
