RegisterCommand('tweet', (source, raw) => {
    let args = raw.join(" ");
    let steam = GetPlayerIdentifier(source);

    if (args) {
        connection.query(`SELECT username FROM ${config.mysql.table} WHERE identifier='${steam}'`, function (error, results, fields) {
            if (!results[0]) returnutilts.notify(emitNet, source, '~r~You do not have a username set!');

            setImmediate(()=>{
                utilts.tweet(args, results[0].username, args);
               utilts.notify(emitNet, source, '~b~Tweet Posted!');
            })   
        });
    } else {
       utilts.notify(emitNet, source, '~r~Please input your message!');
    }
}, false);

if (config.anonymousAccounts == true) {
    RegisterCommand('anontweet', (source, raw) => {
        let args = raw.join(" ");
        let steam = GetPlayerIdentifier(source);

        if (args) {
            connection.query(`SELECT username FROM ${config.mysql.table} WHERE identifier='${steam}'`, function (error, results, fields) {
                if (!results[0]) returnutilts.notify(emitNet, source, '~r~You do not have a username set!');

                setImmediate(()=>{
                    utilts.tweet(args, 'AnonymousUser#' + utilts.AnnUserNum(), 'anon');
                    utilts.notify(emitNet, source, '~r~Anonymous Tweet Posted!');
                })   
            });
        } else {
        utilts.notify(emitNet, source, '~r~Please input your message!');
        }
    }, false);
}

RegisterCommand('setUsername', (source, raw) => {
    let args = raw.join(" ");
    let steam = GetPlayerIdentifier(source);

    if (args) {
        connection.query(`SELECT username FROM ${config.mysql.table} WHERE identifier='${steam}'`, function (error, results, fields) {
            if (!results[0]) {
                connection.query(`INSERT INTO twitteraccounts (identifier, username) VALUES ('${steam}', '@${args}#${utilts.AnnUserNum()}');`, function (error, results, fields) {
                    if (error) returnutilts.notify(emitNet, source, '~r~Unexpected Error!');
                   utilts.notify(emitNet, source, `~g~Username set as: ~s~@${args}#${utilts.AnnUserNum()}`);
                });
            } else {
                connection.query(`UPDATE twitteraccounts SET username='@${args}#${utilts.AnnUserNum()}' WHERE identifier='${steam}';`, function (error, results, fields) {
                    if (error) returnutilts.notify(emitNet, source, '~r~Unexpected Error!');
                   utilts.notify(emitNet, source, `~g~Username set as: ~s~@${args}#${utilts.AnnUserNum()}`);
                });
            }
        });
    } else {
       utilts.notify(emitNet, source, '~r~Please input your username!');
    }
}, false);
