



/**
 * Custom blocks
 */
//% weight=10 color=#0fbc11 icon="\uf1b9"
namespace ruilongmotor {

   

    /**
      * Drive motor(s) forward or reverse.
      *
      * @param motor motor to drive.
      * @param speed speed of motor
      */
    //% blockId="ruilong_motor" block="drive motor %motor|speed %speed"
    //% weight=100
    export function motor(motor: number, speed: number): void {
        let forward = (speed >= 0);

        if (speed > 1023) {
            speed = 1023;
        } else if (speed < -1023) {
            speed = -1023;
        }
        

        if (motor == 1) {
            if(speed == 0)
            {
                pins.analogWritePin(DigitalPin.P14, 0);
                pins.analogWritePin(AnalogPin.P13, 0); 
            }else
            {
                if(spped>0)
                {
                    pins.analogWritePin(AnalogPin.P14, 1023-Speed);
                    pins.digitalWritePin(DigitalPin.P13, 1);
                }else
                {
                    pins.analogWritePin(AnalogPin.P13, 1023+Speed);
                    pins.digitalWritePin(DigitalPin.P14, 1);
                }
                
            }
            
        }
        if (motor == 2) {
            if(speed == 0)
            {
                pins.analogWritePin(DigitalPin.P15, 0);
                pins.analogWritePin(AnalogPin.P16, 0); 
            }else
            {
                if(spped>0)
                {
                    pins.analogWritePin(AnalogPin.P15, 1023-Speed);
                    pins.digitalWritePin(DigitalPin.P16, 1);
                }else
                {
                    pins.analogWritePin(AnalogPin.P15, 1023+Speed);
                    pins.digitalWritePin(DigitalPin.P16, 1);
                }
                
            }
            
        }
        
    }

  
}
