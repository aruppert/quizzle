import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.icon1};
  height: 50px;
  stroke: ${props => props.theme.colors.icon1};
  stroke-width: 0.75;
  stroke-linecap: round;
`;

export default function Planet(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <path d="M 31 2 C 15.007813 2 2 15.011719 2 31 C 2 46.988281 15.007813 60 31 60 C 46.992188 60 60 46.988281 60 31 C 60 15.011719 46.992188 2 31 2 Z M 31 4 C 37.863281 4 44.132813 6.578125 48.902344 10.8125 C 47.523438 11.304688 46.070313 12.109375 45.28125 13.21875 C 45.183594 13.359375 45.082031 13.519531 44.972656 13.691406 C 44.726563 14.082031 44.210938 14.886719 43.945313 14.820313 C 42.8125 14.542969 42.265625 12.222656 42.0625 11.351563 C 41.984375 11.027344 41.917969 10.789063 41.871094 10.679688 C 40.601563 7.617188 37.78125 6.652344 36.578125 6.242188 L 36.324219 6.15625 C 35.902344 6 35.433594 6.144531 35.171875 6.507813 C 34.910156 6.871094 34.921875 7.363281 35.199219 7.714844 C 35.347656 7.902344 35.410156 8.070313 35.429688 8.039063 C 35.363281 8.078125 35.074219 8.253906 34.316406 8.21875 C 34.207031 7.183594 33.75 6.382813 33 5.960938 C 32.109375 5.457031 30.976563 5.59375 29.96875 6.328125 C 29.234375 6.863281 28.5 7.425781 27.757813 7.992188 C 27.015625 8.554688 26.261719 9.128906 25.496094 9.691406 C 24.195313 10.644531 23.707031 11.882813 24.222656 12.921875 C 24.519531 13.523438 25.058594 13.832031 25.417969 14.035156 L 30.410156 16.902344 C 30.832031 17.144531 31.367188 17.046875 31.679688 16.671875 C 32.558594 15.601563 33.015625 14.214844 32.941406 12.832031 C 32.964844 12.855469 32.992188 12.890625 33.027344 12.941406 C 33.957031 14.445313 35.644531 13.640625 36.453125 13.253906 C 36.609375 13.179688 36.828125 13.074219 36.9375 13.023438 C 37.316406 13.339844 37.898438 14.609375 37.96875 14.984375 C 37.976563 15.082031 37.890625 15.3125 37.632813 15.5625 C 37.355469 15.828125 37.027344 15.953125 36.871094 15.941406 C 35.886719 15.847656 35.085938 16.28125 34.816406 17.023438 C 34.59375 17.644531 34.832031 18.328125 35.40625 18.722656 C 35.550781 18.824219 35.828125 18.941406 36.179688 19.050781 C 35.835938 19.148438 35.609375 19.25 35.453125 19.414063 C 35.214844 19.5625 34.988281 19.691406 34.773438 19.820313 C 33.695313 20.457031 32.761719 21.007813 31.734375 22.261719 C 30.835938 23.359375 30.203125 24.570313 29.871094 25.796875 C 28.804688 25.222656 27.488281 25.082031 26.375 25.269531 C 25.328125 25.445313 23.578125 25.734375 23.070313 27.800781 C 22.828125 28.792969 23.078125 29.824219 23.746094 30.554688 C 24.367188 31.238281 25.257813 31.546875 26.191406 31.40625 C 26.289063 31.390625 26.433594 31.359375 26.59375 31.328125 C 26.597656 31.324219 26.597656 31.328125 26.597656 31.328125 C 26.523438 31.621094 26.511719 31.96875 26.671875 32.335938 C 27.023438 33.121094 27.792969 33.230469 28.207031 33.289063 C 28.230469 33.292969 28.261719 33.296875 28.289063 33.300781 C 28.292969 33.328125 28.296875 33.355469 28.300781 33.386719 C 28.121094 33.335938 27.945313 33.285156 27.765625 33.234375 C 26.613281 32.917969 25.527344 32.621094 24.425781 32.097656 C 23.445313 31.628906 22.265625 30.339844 21.402344 29.394531 L 21.125 29.09375 C 20.105469 27.988281 18.90625 25.582031 18.894531 25.558594 C 18.726563 25.214844 18.382813 25 18 25 C 17.621094 25 17.277344 25.214844 17.105469 25.550781 L 16.894531 25.96875 C 15.847656 24.246094 14.226563 21.347656 13.6875 19.144531 L 13.613281 18.859375 C 13.125 16.84375 12.519531 14.429688 10.757813 13.160156 C 12.652344 11.011719 14.882813 9.171875 17.363281 7.710938 C 17.46875 7.808594 17.589844 7.886719 17.734375 7.9375 C 19.652344 8.554688 21.699219 9.160156 23.773438 9.160156 C 24.667969 9.160156 24.964844 8.265625 25.171875 7.59375 C 25.976563 7.175781 27.699219 6.265625 27.699219 6.265625 C 28.074219 6.066406 28.285156 5.648438 28.21875 5.226563 C 28.152344 4.800781 27.824219 4.46875 27.402344 4.398438 L 27.398438 4.398438 L 27.53125 4.257813 C 27.542969 4.246094 27.542969 4.238281 27.550781 4.226563 C 28.683594 4.082031 29.832031 4 31 4 Z M 24.40625 4.816406 C 24.363281 4.996094 24.367188 5.191406 24.425781 5.375 C 24.457031 5.476563 24.507813 5.566406 24.566406 5.648438 C 24.265625 5.804688 24.03125 5.929688 23.933594 5.976563 C 23.515625 6.183594 23.40625 6.539063 23.277344 6.953125 C 23.261719 7.003906 23.238281 7.070313 23.21875 7.140625 C 22.074219 7.074219 20.902344 6.796875 19.753906 6.460938 C 21.238281 5.78125 22.792969 5.222656 24.40625 4.816406 Z M 31.855469 7.65625 C 31.917969 7.660156 31.972656 7.671875 32.019531 7.699219 C 32.226563 7.816406 32.402344 8.28125 32.332031 9.054688 C 32.28125 9.59375 32.675781 10.078125 33.210938 10.140625 C 35.289063 10.386719 36.625 10.015625 37.175781 9.027344 C 37.238281 8.917969 37.285156 8.804688 37.320313 8.6875 C 38.308594 9.175781 39.421875 9.988281 40.015625 11.421875 C 40.042969 11.5 40.074219 11.636719 40.113281 11.8125 C 40.425781 13.121094 41.152344 16.191406 43.46875 16.761719 C 45.128906 17.164063 46.128906 15.605469 46.660156 14.765625 C 46.753906 14.621094 46.835938 14.488281 46.917969 14.375 C 47.472656 13.589844 48.964844 12.789063 50.53125 12.410156 C 50.554688 12.4375 50.589844 12.453125 50.621094 12.480469 C 52.914063 14.910156 54.765625 17.761719 56.035156 20.910156 C 55.921875 20.992188 55.832031 21.078125 55.785156 21.128906 C 54.910156 22.035156 54.304688 23.164063 54.03125 24.394531 C 53.964844 24.707031 53.761719 25.644531 54.296875 26.4375 C 54.613281 26.910156 56.070313 28.003906 57.5 28.160156 C 56.628906 29.148438 54.671875 31.429688 53.925781 32.78125 C 53.53125 33.625 53.507813 37.046875 54.136719 38.035156 C 54.621094 38.804688 55.390625 39.546875 55.949219 40.03125 C 56.074219 40.140625 56.21875 40.199219 56.371094 40.234375 C 53.351563 48.507813 46.394531 54.902344 37.78125 57.136719 C 40.484375 54.554688 43.199219 51.917969 45.859375 49.269531 C 46.699219 48.4375 47.746094 47.398438 48.292969 46.050781 C 48.425781 45.71875 48.527344 45.371094 48.625 45.027344 C 48.753906 44.582031 48.875 44.160156 49.074219 43.839844 C 49.175781 43.664063 49.304688 43.507813 49.433594 43.351563 C 49.625 43.113281 49.847656 42.839844 50.027344 42.515625 C 50.449219 41.75 50.566406 40.632813 49.867188 39.871094 C 49.441406 39.402344 48.878906 39.253906 48.507813 39.15625 L 44.011719 37.972656 C 43.929688 36.558594 42.683594 35.308594 41.316406 34.628906 C 38.632813 33.304688 35.546875 32.945313 32.628906 33.625 C 32.148438 33.734375 31.441406 34.058594 30.972656 34.289063 C 30.761719 34.199219 30.550781 34.113281 30.339844 34.03125 C 30.34375 32.253906 29.839844 31.871094 29.640625 31.71875 C 29.359375 31.503906 29.054688 31.410156 28.785156 31.359375 C 28.945313 31.035156 29.089844 30.601563 28.953125 30.097656 C 28.605469 28.855469 27.085938 29.175781 26.175781 29.371094 C 26.058594 29.394531 25.960938 29.417969 25.890625 29.425781 C 25.621094 29.464844 25.394531 29.394531 25.222656 29.203125 C 25.007813 28.972656 24.929688 28.617188 25.015625 28.28125 C 25.164063 27.660156 25.390625 27.460938 26.703125 27.242188 C 27.820313 27.054688 29.25 27.382813 29.699219 28.347656 C 29.894531 28.78125 30.375 29.007813 30.835938 28.90625 C 31.296875 28.796875 31.621094 28.378906 31.605469 27.902344 C 31.5625 26.453125 32.15625 24.898438 33.28125 23.527344 C 34.082031 22.546875 34.761719 22.148438 35.785156 21.546875 C 36.082031 21.371094 36.394531 21.1875 36.738281 20.972656 C 36.742188 20.96875 36.746094 20.96875 36.75 20.964844 C 36.960938 20.914063 37.335938 20.839844 37.652344 20.777344 C 38.488281 20.613281 39.441406 20.425781 40.0625 20.203125 C 40.417969 20.078125 41.277344 19.699219 41.621094 18.9375 C 41.796875 18.546875 41.804688 18.117188 41.648438 17.71875 C 41.449219 17.21875 41.023438 16.878906 40.484375 16.78125 C 39.859375 16.667969 39.117188 16.917969 38.609375 17.386719 C 38.585938 17.390625 38.5625 17.390625 38.535156 17.394531 C 38.707031 17.28125 38.867188 17.148438 39.015625 17.003906 C 39.65625 16.390625 40.003906 15.621094 39.96875 14.890625 C 39.945313 14.421875 38.929688 11 37 11 C 36.527344 11 36.074219 11.21875 35.59375 11.449219 C 35.34375 11.566406 34.902344 11.777344 34.675781 11.8125 C 34.007813 10.800781 33.027344 10.683594 32.328125 10.910156 C 31.46875 11.195313 30.871094 12.023438 30.9375 12.832031 C 30.992188 13.460938 30.863281 14.117188 30.582031 14.695313 L 26.410156 12.300781 C 26.308594 12.242188 26.058594 12.101563 26.019531 12.0625 C 26.027344 11.960938 26.226563 11.636719 26.675781 11.308594 C 27.457031 10.738281 28.21875 10.15625 28.972656 9.578125 C 29.703125 9.023438 30.429688 8.46875 31.152344 7.941406 C 31.40625 7.753906 31.664063 7.652344 31.855469 7.65625 Z M 9.488281 14.707031 C 10.742188 15.527344 11.234375 17.53125 11.671875 19.328125 L 11.746094 19.625 C 12.644531 23.289063 16.027344 28.347656 16.171875 28.5625 C 16.367188 28.855469 16.695313 29.011719 17.0625 29 C 17.417969 28.976563 17.734375 28.765625 17.894531 28.449219 L 18.039063 28.15625 C 18.503906 28.941406 19.089844 29.835938 19.65625 30.449219 L 19.925781 30.746094 C 20.957031 31.871094 22.234375 33.269531 23.574219 33.90625 C 24.828125 34.5 26.050781 34.835938 27.234375 35.164063 C 27.820313 35.324219 28.390625 35.484375 28.953125 35.667969 L 30.601563 36.316406 C 30.660156 36.347656 30.75 36.390625 30.8125 36.425781 C 30.757813 36.609375 30.546875 36.9375 30.429688 37.125 L 30.296875 37.339844 C 29.246094 39.050781 29.347656 41.367188 30.542969 42.980469 C 31.011719 43.613281 31.59375 44.097656 32.160156 44.570313 C 32.894531 45.179688 33.527344 45.707031 33.734375 46.394531 C 33.863281 46.839844 33.820313 47.371094 33.75 48.019531 C 33.394531 51.175781 32.902344 54.355469 32.277344 57.464844 C 32.253906 57.585938 32.21875 57.761719 32.21875 57.96875 C 31.816406 57.988281 31.410156 58 31 58 C 16.113281 58 4 45.886719 4 31 C 4 24.882813 6.046875 19.238281 9.488281 14.707031 Z M 56.800781 23.035156 C 57.117188 24.050781 57.363281 25.097656 57.558594 26.164063 C 56.894531 26.03125 56.109375 25.484375 55.957031 25.324219 C 55.957031 25.324219 55.902344 25.210938 55.988281 24.828125 C 56.128906 24.191406 56.410156 23.574219 56.800781 23.035156 Z M 57.992188 30.65625 C 57.992188 30.769531 58 30.886719 58 31 C 58 33.523438 57.644531 35.964844 56.996094 38.28125 C 56.476563 37.804688 56.066406 37.351563 55.84375 36.996094 C 55.605469 36.488281 55.578125 34.132813 55.710938 33.691406 C 56.117188 32.953125 57.101563 31.714844 57.992188 30.65625 Z M 12.65625 34.703125 C 12.527344 34.683594 12.394531 34.691406 12.261719 34.730469 L 10.328125 35.246094 C 9.792969 35.390625 9.476563 35.9375 9.617188 36.46875 C 9.738281 36.917969 10.144531 37.214844 10.585938 37.214844 C 10.671875 37.214844 10.757813 37.199219 10.84375 37.175781 L 12.777344 36.660156 C 13.308594 36.515625 13.628906 35.96875 13.484375 35.4375 C 13.378906 35.035156 13.042969 34.753906 12.65625 34.703125 Z M 35.890625 35.300781 C 37.464844 35.351563 39.035156 35.734375 40.433594 36.425781 C 41.355469 36.882813 42.207031 37.75 41.972656 38.355469 C 41.867188 38.621094 41.882813 38.914063 42.011719 39.171875 C 42.140625 39.425781 42.371094 39.609375 42.648438 39.683594 L 48 41.09375 C 48.109375 41.121094 48.339844 41.183594 48.371094 41.183594 C 48.382813 41.226563 48.367188 41.386719 48.277344 41.546875 C 48.179688 41.722656 48.035156 41.902344 47.878906 42.097656 C 47.699219 42.320313 47.519531 42.550781 47.371094 42.796875 C 47.027344 43.351563 46.859375 43.949219 46.707031 44.476563 C 46.628906 44.753906 46.546875 45.039063 46.4375 45.304688 C 46.046875 46.273438 45.199219 47.113281 44.453125 47.855469 C 41.628906 50.664063 38.738281 53.472656 35.867188 56.207031 C 35.347656 56.699219 34.867188 57.128906 34.339844 57.355469 C 34.925781 54.347656 35.394531 51.285156 35.734375 48.242188 C 35.804688 47.589844 35.90625 46.691406 35.648438 45.824219 C 35.269531 44.554688 34.296875 43.746094 33.4375 43.03125 C 32.945313 42.617188 32.472656 42.226563 32.148438 41.785156 C 31.4375 40.832031 31.378906 39.402344 32 38.386719 L 32.121094 38.195313 C 32.488281 37.609375 33.085938 36.667969 32.707031 35.703125 C 32.855469 35.640625 32.988281 35.59375 33.082031 35.574219 C 33.996094 35.359375 34.945313 35.273438 35.890625 35.300781 Z M 14.34375 39.402344 C 14.214844 39.417969 14.085938 39.460938 13.96875 39.53125 L 12.234375 40.53125 C 11.753906 40.804688 11.589844 41.417969 11.867188 41.894531 C 12.054688 42.21875 12.386719 42.394531 12.734375 42.394531 C 12.902344 42.394531 13.078125 42.351563 13.234375 42.261719 L 14.96875 41.261719 C 15.445313 40.984375 15.609375 40.375 15.332031 39.894531 C 15.125 39.539063 14.726563 39.355469 14.34375 39.402344 Z M 17.5625 43.4375 C 17.308594 43.4375 17.054688 43.53125 16.859375 43.730469 L 15.441406 45.140625 C 15.054688 45.535156 15.054688 46.167969 15.441406 46.558594 C 15.636719 46.75 15.894531 46.847656 16.152344 46.847656 C 16.40625 46.847656 16.660156 46.75 16.859375 46.558594 L 18.269531 45.140625 C 18.660156 44.75 18.660156 44.117188 18.269531 43.730469 C 18.074219 43.53125 17.820313 43.4375 17.5625 43.4375 Z M 21.730469 46.542969 C 21.34375 46.492188 20.945313 46.675781 20.738281 47.03125 L 19.738281 48.765625 C 19.460938 49.246094 19.625 49.855469 20.105469 50.128906 C 20.261719 50.222656 20.433594 50.265625 20.605469 50.265625 C 20.949219 50.265625 21.285156 50.085938 21.46875 49.765625 L 22.46875 48.03125 C 22.746094 47.554688 22.582031 46.945313 22.105469 46.667969 C 21.984375 46.597656 21.855469 46.558594 21.730469 46.542969 Z M 26.167969 48.488281 C 25.78125 48.542969 25.445313 48.824219 25.339844 49.222656 L 24.824219 51.15625 C 24.679688 51.6875 24.996094 52.238281 25.53125 52.378906 C 25.617188 52.402344 25.703125 52.414063 25.785156 52.414063 C 26.226563 52.414063 26.636719 52.121094 26.753906 51.671875 L 27.269531 49.742188 C 27.417969 49.207031 27.097656 48.660156 26.5625 48.515625 C 26.429688 48.480469 26.296875 48.472656 26.167969 48.488281 Z" />
    </Svg>
  );
}
