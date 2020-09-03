<h1>IamAdren's Twitter Bot</h1>
<p>This script adds the feature of being able to do either /tweet in game which will go to Discord and FiveM Chat or in Discord being able to do !tweet and it goes to FiveM and Discord</p>

## Installation
#### FiveM Setup
1. CD Into the folder *Not while the FXServer is started!*

2. Type ```npm i```

3. Run the SQL File into your MySQL Server.

4. Edit the config with your MySQL Details

#### Discord Bot Installation 
1. Clone repository

2. Create a app bot token key at [Discord Developers](https://discordapp.com/developers/applications/me)

./token.json
```json
{
  "value" : "yourtokenvaluehere"
}
```

3. Run the following in terminal

```bash
$ node index.js
```

## Screenshots
<p><u>Tweet from FiveM Chat</u></p>
<img src="https://i.imgur.com/wRo841E.jpeg" alt="">
<img src="https://i.imgur.com/ceGQlea.png" alt="">

<p><u>Tweet command from Discord</u></p>
<img src="https://i.imgur.com/3SpdB1f.png" alt="">
<img src="https://i.imgur.com/sSMfxCt.png" alt="">
