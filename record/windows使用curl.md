### curl

_win10 系统内部集成了 curl, 不过需要 cmd 中使用, powerShell 下执行 curl 命令会有意料不到的异常。_

```shell
# win10 集成下的 curl 所在位置
C:\Windows\System32\curl.exe

# 查看系统自带命令 - 基于 powerShell 终端
Get-Command curl  # 可以看到 curl 是 Invoke-WebRequest 的别名

## win10 如果想用自定义安装的 curl 版本覆盖本地版本，需要变更系统别名，参考以下两个命令

# 临时删除系统别名 - 下次启动新终端会重置
Del alias:curl

# 设置别名
Set-Alias curl 'xxx/curl.exe'
```

cur 官网下载地址: https://curl.se/download.html

下载后解压，然后配置环境变量

```shell
# 新建系统变量
CURL_HOME = 'curl目录\bin'

# 变量添加进path
path = '%CURL_HOME%\I386'
```
