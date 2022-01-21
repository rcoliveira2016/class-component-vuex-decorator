import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import store from "@/store";

@Module({
  namespaced: true,
  name: "ContadorStoreModule",
  store: store,
  dynamic: true,
})
class ContadorStoreModule extends VuexModule {
  valor = 1;

  @Mutation
  alterarValor(valor: number): void {
    this.valor = valor;
  }
}

export const ContadorModule = getModule(ContadorStoreModule);
