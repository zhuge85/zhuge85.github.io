require.config({
	baseUrl:"js",
    paths: {
        tools: 'tools',
        qx: 'qx',
        index: 'index',
        script: 'script',
    },
    shim: {
	  'index': {
        deps:['tools'],
        exports: 'index',
      }
	}
});

require(['tools'], function() {
});
require(['qx','index','script'], function() {
});
