"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_module_1 = require("../category/category.module");
const user_module_1 = require("../user/user.module");
const todo_period_module_1 = require("../todo-period/todo-period.module");
const todo_entity_1 = require("./todo.entity");
const todo_service_1 = require("./todo.service");
const todo_resolver_1 = require("./todo.resolver");
let TodoModule = class TodoModule {
};
TodoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([todo_entity_1.Todo]),
            category_module_1.CategoryModule,
            user_module_1.UserModule,
            todo_period_module_1.TodoPeriodModule,
        ],
        providers: [todo_service_1.TodoService, todo_resolver_1.TodoResolver],
        exports: [typeorm_1.TypeOrmModule],
    })
], TodoModule);
exports.TodoModule = TodoModule;
//# sourceMappingURL=todo.module.js.map