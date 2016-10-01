# Form Validation By AngularJS

### 常用指令

- 必填项：required

```bash
<input type="text" required />  
```

- 最小长度：ng-minlength="{number}"

```bash
<input type="text" ng-minlength="6" /> 
```

- 最大长度: ng-maxlength="{number}"

```bash
<input type="text" ng-maxlength="20" />
```

- 模式匹配：使用ng-pattern="/PATTERN/"来确保输入能够匹配指定的正则表达式

```bash
<input type="text" ng-pattern="/[a-z]/" /> 
```