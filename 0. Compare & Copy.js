const fs = require('fs')
const join = require('path').join
const exec = require('child_process').execSync

function queryPath (rootPath) {
    const folderList = []
    let files = fs.readdirSync(rootPath)
    for (file of files) {
        if (fs.statSync(join(rootPath, file)).isDirectory()) {
            folderList.push(file)
        }
    }
    return folderList
}
const sameList = []
const fileListA = queryPath('./icon_merge/thumb_wandoujia')
const fileListB = queryPath('./icon_merge/thumb_yingyongbao')
for (let file of fileListA) {
    if (flieListB.includes(file)) sameList.push(piece)
}
for (let piece of sameList) {
    piece = piece.replace(/\s/g, '\\ ')
    piece = piece.replace('(', '\\(')
    piece = piece.replace(')', '\\)')
    piece = piece.replace('&', '\\&')
    exec('cp -r ./icon_merge/thumb_wandoujia/' + piece + ' ./result/wandoujia/')
    exec('cp -r ./icon_merge/thumb_yingyongbao/' + piece + ' ./result/yingyongbao/')
}