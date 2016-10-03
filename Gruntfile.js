'use strict' //声明使用ES5

module.exports = function(grunt) {
    //引入工具插件
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    //配置项目路径
    var config = {
        app: 'app',
        dist: 'dist'
    }

    //任务配置
    grunt.initConfig({
        config: config,

        copy: {
            dist: {
                files: {
                    '<%= config.dist %>/index.html': '<%= config.app %>/index.html',
                    '<%= config.dist %>/js/index.js': '<%= config.app %>/js/index.js'
                }
            }
        },

        clean: {
            dist: {
                src: '<%= config.dist %>/**/*',
                filter: 'isFile'
            }
        },

        uglify: {
            my_uglify: {
                files: {
                    '<%= config.dist %>/js/index.min.js': [
                        '<%= config.app %>/js/index.js',
                        '<%= config.app %>/js/indexsec.js'
                    ]
                }
            }
        },

        imagemin: {
            myImagemin: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: 'app/images/',
                    src: ['**/*.{png,jpg,jpeg,JPG}'], // 优化 images 目录下所有 png/jpg/jpeg 图片
                    dest: 'dist/images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        }
    });
}
