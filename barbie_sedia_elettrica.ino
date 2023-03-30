#include <SerialMP3Player.h>
#define TX 6 
#define RX 8

SerialMP3Player mp3(RX, TX);
#define buttonPin 3
#define ledPin1 9 
#define ledPin2 10
#define ledPin3 11

#define relayPin 4
bool isPlaying = false;

void setup()
{
  Serial.begin(9600);                 // start serial interface  
  mp3.begin(9600);        // start mp3-communication
  delay(500);                         // wait for init
  mp3.sendCommand(CMD_SEL_DEV, 0, 2); // select sd-card  
  delay(500);             // wait for init

  //i/o init
  pinMode(buttonPin, INPUT_PULLUP); //forse meglio rimuovere PULLUP
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(relayPin, OUTPUT);
  digitalWrite(ledPin1, LOW);
  digitalWrite(ledPin2, LOW);
  digitalWrite(ledPin3, LOW);
}

void loop()
{
  int buttonVal = digitalRead(buttonPin);

  if (!isPlaying) { // se non sta suonando...
    if (buttonVal == HIGH) { // ...e se il pulsante viene premuto
    Serial.println("Pulsante premuto!");
    mp3.play(0); // avvio la riproduzione
    isPlaying = true;
    // delay(300);
    }
  } else { // se sta suonando...

    digitalWrite(ledPin1, HIGH);
    delay(300+100); //risyncato
    digitalWrite(ledPin2, HIGH);
    delay(380);
    digitalWrite(ledPin3, HIGH);
    digitalWrite(relayPin, HIGH);

    if (buttonVal == LOW) { //...e se il pulsante non è più premuto
      Serial.println("Pulsante rilasciato!");

      // TODO aggiungere fade

      mp3.stop();
      digitalWrite(relayPin, LOW);
      delay(50);
      digitalWrite(ledPin3, LOW);
      delay(100);
      digitalWrite(ledPin2, LOW);
      delay(100);
      digitalWrite(ledPin1, LOW);
      isPlaying = false;

      //delay(100); // forse dumb0
    }
  }
}
