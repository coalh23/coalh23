import { useEffect, useState } from 'react';

interface AnimatedCircleProps {
  size?: number;
  color?: string; // Ahora espera RGB como "rgb(r, g, b)"
  brightness?: number;
  opacity?: number;
  isAnimated?: boolean;
  animationSpeed?: number;
  strokeWidth?: number;
}

export default function AnimatedCircle({
  size = 100,
  color = "rgb(59, 130, 246)",
  brightness = 1,
  opacity = 1,
  isAnimated = true,
  animationSpeed = 2,
  strokeWidth = 2
}: AnimatedCircleProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!isAnimated) return;

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50 / animationSpeed);

    return () => clearInterval(interval);
  }, [isAnimated, animationSpeed]);

  // Ajusta el color según el brillo
  const adjustedColor = brightness !== 1 
    ? `rgba(${color.match(/\d+/g)?.join(', ')}, ${brightness})`
    : color;

  const radius = size / 2;
  const centerX = size / 2;
  const centerY = size / 2;
  
  // Escala proporcionalmente todos los elementos
  const scaleFactor = size / 100; // Factor de escala basado en el tamaño de referencia (100)
  const adjustedStrokeWidth = strokeWidth * scaleFactor;
  const centralCircleRadius = radius * 0.3; // 30% del radio total
  const orbitRadius = radius * 0.7; // 70% del radio total para la órbita
  const orbitingPointRadius = Math.max(2 * scaleFactor, 1); // Punto que gira, mínimo 1px

  // Calcula la posición del punto que gira
  const orbitingPointX = centerX + orbitRadius * Math.cos((rotation * Math.PI) / 180);
  const orbitingPointY = centerY + orbitRadius * Math.sin((rotation * Math.PI) / 180);

  return (
    <div 
      className="inline-block"
      style={{ 
        width: size, 
        height: size,
        opacity: opacity
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Círculo central con relleno */}
        <circle
          cx={centerX}
          cy={centerY}
          r={centralCircleRadius}
          fill={adjustedColor}
          opacity={opacity}
        />
        
        {/* Círculo de órbita (sin relleno) */}
        <circle
          cx={centerX}
          cy={centerY}
          r={orbitRadius}
          fill="none"
          stroke={adjustedColor}
          strokeWidth={adjustedStrokeWidth}
          opacity={opacity * 0.5}
        />
        
        {/* Punto que gira alrededor */}
        <circle
          cx={orbitingPointX}
          cy={orbitingPointY}
          r={orbitingPointRadius}
          fill={adjustedColor}
          opacity={opacity}
          style={{
            filter: `brightness(${brightness})`
          }}
        />
      </svg>
    </div>
  );
} 