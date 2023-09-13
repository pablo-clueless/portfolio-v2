const vertex = `uniform sampler2D uTexture;
uniform vec2 uOffset;
varying vec2 vUv;

#define M_PI 3.1415926535897932384626433832795

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
  position.x = position.x + (sin(uv.y * M_PI) * offset.x);
  position.y = position.y + (sin(uv.x * M_PI) * offset.y);
  return position;
}

void main() {
  vUv = uv;
  vec3 newPosition = deformationCurve(position, uv, uOffset);
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}
`

const fragment = `uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec2 uOffset;
varying vec2 vUv;

vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
  float r = texture2D(textureImage, uv + offset).r;
  vec2 gb = texture2D(textureImage, uv).gb;
  return vec3(r, gb);
}

void main() {
  vec3 color = rgbShift(uTexture, vUv, uOffset);
  gl_FragColor = vec4(color, uAlpha);
}`

const metal = `
uniform vec2 resolution;
uniform float time;
void main() {
  vec2 coord = gl_FragCoord.xy / resolution.xy;
  vec2 st = coord;
  vec3 line = vec3(0.0);

  coord *= 4.;

  float len;

  for (int i = 0; i < 15; i++) {
      len = length(vec2(coord.x, coord.y));
      coord.x += cos(coord.y + sin(len)) + cos(time * .07) * 0.2;
      coord.y += sin(coord.x + cos(len)) + sin(time * 0.1);
  }

  len *= cos(len * 0.4);

  len -= 10.;

  for (float i = 0.0; i < 5.0; i++) {
      len += 0.11 / abs(mod(st.x, 1.09 * i) * 200.) * 1.;
  }

  vec3 color = vec3(cos(len + 0.2) * 1.15, cos(len + 0.1), cos(len - 0.05));

  gl_FragColor = vec4(color, 1.0);
}
`

export { fragment, metal, vertex }
