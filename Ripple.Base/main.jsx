import { } from "ripple";

// Try to auto-import this (and watch the TypeScript output) ----->

Render

// Either "Render" will appear in the intellisense popup (without any details)
// and an error will be logged, or it won't appear at all. This is intermittent;
// just try it a couple of times in a row. When it stops appearing completely
// (which sometimes happens), it seems like restarting VS Code helps.

// We have a "handles.js" dependency (which is one of our older homegrown packages and might not follow best practices).
// Even though auto import worked perfectly before, without modification, removing this from `ripple.js` seems to fix
// the issue we have in the latest versions of VS Code, so it seems there's *something* typescript doesn't like in
// there. The package itself is quite simple and built using webpack. You can check it out here:
// https://github.com/Simbioz/handles.js

// The exact error is below for reference:

// [Error  - 10:26:19 PM] 'completionEntryDetails' request failed with error.
// Error processing request. Debug Failure. Unknown entity name kind.
// Error: Debug Failure. Unknown entity name kind.
//     at resolveEntityName (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:32120:32)
//     at getTargetOfExportAssignment (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:31946:29)
//     at getTargetOfAliasDeclaration (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:31968:28)
//     at Object.getImmediateAliasedSymbol (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:30369:45)
//     at getDefaultExportInfoWorker (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:108157:39)
//     at getDefaultLikeExportInfo (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:108139:24)
//     at /Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:107936:35
//     at forEachExternalModule (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:108279:21)
//     at getAllReExportingModules (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:107931:13)
//     at Object.getImportCompletionAction (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:107917:31)
//     at getCompletionEntryCodeActionsAndSourceDisplay (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:94007:33)
//     at Object.getCompletionEntryDetails (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:93957:30)
//     at Object.getCompletionEntryDetails (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:114771:35)
//     at /Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:122602:57
//     at Object.mapDefined (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:578:30)
//     at IOSession.Session.getCompletionEntryDetails (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:122600:33)
//     at Session.handlers.ts.createMapFromTemplate._a.(anonymous function) (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:121638:61)
//     at /Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:123057:88
//     at IOSession.Session.executeWithRequestId (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:123048:28)
//     at IOSession.Session.executeCommand (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:123057:33)
//     at IOSession.Session.onMessage (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:123077:35)
//     at Interface.<anonymous> (/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/tsserver.js:124340:27)
//     at emitOne (events.js:116:13)
//     at Interface.emit (events.js:211:7)
//     at Interface._onLine (readline.js:282:10)
//     at Interface._normalWrite (readline.js:424:12)
//     at Socket.ondata (readline.js:141:10)
//     at emitOne (events.js:116:13)
//     at Socket.emit (events.js:211:7)
//     at addChunk (_stream_readable.js:263:12)
//     at readableAddChunk (_stream_readable.js:250:11)
//     at Socket.Readable.push (_stream_readable.js:208:10)
//     at Pipe.onread (net.js:594:20)