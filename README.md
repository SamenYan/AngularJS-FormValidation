# Form Validation By AngularJS

### 常用指令

- 必填项：使用required某个表单输入是否已填写

```bash
<input type="text" required />  
```

- 最小长度：使用ng-minlength="{number}"来验证表单输入的文本长度是否大于某个最小值

```bash
<input type="text" ng-minlength="6" /> 
```

- 最大长度:使用ng-maxlength="{number}"来验证表单输入的文本长度是否小于或等于某个最大值

```bash
<input type="text" ng-maxlength="20" />
```

- 模式匹配：使用ng-pattern="/PATTERN/"来确保输入能够匹配指定的正则表达式

```bash
<input type="text" ng-pattern="/[a-zA-Z]/" /> 
```