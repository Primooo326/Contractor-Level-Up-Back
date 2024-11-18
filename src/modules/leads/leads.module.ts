import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RouterModule, RouteTree } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';

function createRoutesWithPrefix(prefix: string, modules: any[]): RouteTree[] {
  return modules.map((module) => ({
    path: prefix,
    module,
  }));
}

const coreModules = [
  UsersModule,
  AuthModule
];

@Module({
  imports: [
    RouterModule.register([
      ...createRoutesWithPrefix('leads', coreModules),
    ]),
    ...coreModules
  ],
  controllers: [],
  providers: [],
})
export class LeadsModule { }
