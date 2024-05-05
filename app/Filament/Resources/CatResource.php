<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CatResource\Pages;
use App\Filament\Resources\CatResource\RelationManagers;
use App\Models\Cat;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CatResource extends Resource
{
    protected static ?string $model = Cat::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')->required(),
                TextInput::make('breed'),
                Textarea::make('description'),
                Select::make('suitable_for')->options([
                    'all' => 'All',
                    'children', 'Children',
                    'teenagers' => 'Teenagers',
                    'adults' => 'Adults'
                ]),
                Select::make('area')->options([
                    'Manhattan' => 'Manhattan',
                    'Brooklyn' => 'Brooklyn',
                    'Queens' => 'Queens',
                    'The Bronx' => 'The Bronx',
                    'Staten Island' => 'Staten Island',
                ]),
                Radio::make('friendliness_level')->options([
                    '1' => '1',
                    '2' => '2',
                    '3' => '3',
                    '4' => '4',
                    '5' => '5',
                ])->inline(),
                Checkbox::make('has_owner'),
                FileUpload::make('image')->disk(config('app.storage'))->directory('cats')->visibility('public'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label('ID'),
                TextColumn::make('name')->label('Cat Name'),
                TextColumn::make('breed'),
                TextColumn::make('friendliness_level')->label('How Friendly'),
                TextColumn::make('description')->limit(50),
                ImageColumn::make('image'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCats::route('/'),
            'create' => Pages\CreateCat::route('/create'),
            'edit' => Pages\EditCat::route('/{record}/edit'),
        ];
    }
}
