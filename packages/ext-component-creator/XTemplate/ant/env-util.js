importPackage(com.sencha.command.environment);

(function(Scope){

    applyTo(Scope, {

        getPackageEnvironments: function(path) {
            path = path || project.getProperty("project.dir");

            var buildEnv = BuildEnvironment.load(path),
                packages = [];

            packages.push(buildEnv);

            while(buildEnv.hasExtend()) {
                buildEnv = buildEnv.getExtendPackageEnvironment();
                packages.push(buildEnv);
            }

            return packages.reverse();
        }

    });

})(this);