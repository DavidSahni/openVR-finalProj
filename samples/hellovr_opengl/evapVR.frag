#version 330 compatibility


uniform sampler2D blockm;
in vec2 stCoords;
in float gLightIntensity;
in float yPos;
out vec4 outputcolor;
const vec3 GRAY = vec3(0,0, 0);
const vec3 GREEN = vec3(0., 1., 0.);

void
main( )
{

	if (yPos >= .55){
		discard;
	}
	float mxVal = yPos * 2;
	vec3 color = mix(GREEN,  GRAY, mxVal);
	outputcolor = vec4(  gLightIntensity*color, 1. - yPos );
	}