//Name: Jacob yee
//Partner: None
//Code referenced: Smiley.js

class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {
    }};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.leftArmX = this.bodyX - 80;
        this.leftArmY = this.bodyY + 50;
        this.rightArmX = this.bodyX + 80;
        this.rightArmY = this.bodyY + 50;
        this.leftLegX = this.bodyX - 40;
        this.leftLegY = this.bodyY + 100;
        this.rightLegX = this.bodyX + 40;
        this.rightLegY = this.bodyY + 100;
        this.leftEyeX = this.bodyX - 35;
        this.leftEyeY = this.bodyY - 20;
        this.rightEyeX = this.bodyX + 35;
        this.rightEyeY = this.bodyY - 20;
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 25;
        this.leftEarX = this.bodyX - 50;
        this.leftEarY = this.bodyY - 80;
        this.rightEarX = this.bodyX + 50;
        this.rightEarY = this.bodyY - 80;

        // Keys to be pressed
        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        // Create sprites for arms
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_whiteE.png");
        my.sprite.leftArm.flipX = true; // flip sprite
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_whiteE.png");
        
        // Create sprites for legs
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_whiteC.png");
        my.sprite.leftLeg.flipX = true; // flip sprite
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_whiteC.png");
        
        // Create dprite for the body ((stacks above arms to cover the joints))
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteC.png");

        // Create sprites for eyes
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.leftEye.flipX = true; // flip sprite
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_psycho_dark.png");
        
        // Create sprite for mouths
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthI.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthF.png");

        // Create sprites for ears
        my.sprite.leftEar = this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_white_ear.png");
        my.sprite.leftEar.flipX = true; // flip sprite
        my.sprite.rightEar = this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_white_ear.png");

        // Sprites that start as invisible
        my.sprite.fangs.visible = false;

        // keys to be pressed or held down
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);






        

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        //Polling Input, Smile
        if (Phaser.Input.Keyboard.JustDown(this.sKey)) {
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;

        }
        //Polling Input, Fangs
        if (Phaser.Input.Keyboard.JustDown(this.fKey)) {
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;

        }

        //Polling Input, Move left
        if (this.aKey.isDown) {
            my.sprite.leftArm.x += (-1);
            my.sprite.rightArm.x += (-1);
            my.sprite.leftLeg.x += (-1);
            my.sprite.rightLeg.x += (-1);
            my.sprite.body.x += (-1);
            my.sprite.leftEye.x += (-1);
            my.sprite.rightEye.x += (-1);
            my.sprite.smile.x += (-1);
            my.sprite.fangs.x += (-1);
            my.sprite.leftEar.x += (-1);
            my.sprite.rightEar.x += (-1);

        }
        //Polling Input, Move right
        if (this.dKey.isDown) {
            my.sprite.leftArm.x += (1);
            my.sprite.rightArm.x += (1);
            my.sprite.leftLeg.x += (1);
            my.sprite.rightLeg.x += (1);
            my.sprite.body.x += (1);
            my.sprite.leftEye.x += (1);
            my.sprite.rightEye.x += (1);
            my.sprite.smile.x += (1);
            my.sprite.fangs.x += (1);
            my.sprite.leftEar.x += (1);
            my.sprite.rightEar.x += (1);

        }

      

       
    }

}